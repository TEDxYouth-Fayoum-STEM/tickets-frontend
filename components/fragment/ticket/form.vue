<template>
  <div>
    <Marked
      t="Book Your Ticket Now!"
      priority="high"
      class="select-none text-xl"
    />
    <form
      class="mt-2 grid grid-cols-1 gap-x-6 lg:mt-4 lg:grid-cols-2"
      @submit.prevent="submitHandle"
    >
      <input type="hidden" name="interests" :value="parsedInterests" />
      <FormInput id="name" l="Full Name" req />
      <FormSelect id="gender" l="Gender" ph="Select your gender" req>
        <option value="MALE">Male</option>
        <option value="FEMALE">Female</option>
      </FormSelect>
      <FormSelect id="role" l="Your Role" req>
        <option value="STEM_STUDENT">STEM Student</option>
        <option value="STUDENT">High-School Student</option>
        <option value="UNDER_GRADUATE">UnderGraduate</option>
        <option value="GRADUATE">Graduate</option>
      </FormSelect>
      <FormInput id="school_or_uni" l="School or University" req />
      <div class="mb-4 lg:col-span-2">
        <label class="label">Interests</label>
        <MultiSelect
          v-model="selectedInterests"
          :options="interests"
          :limit="interests.length"
          :searchable="true"
          placeholder="Select your interests (mulitiples are allowed)"
          mode="tags"
        />
      </div>
      <FormInput
        id="email"
        v-model="emailAddress"
        t="email"
        l="Email Address"
        req
        :e="emailError"
        @change="checkEmail"
      />
      <FormInput
        id="wa_nu"
        v-model="whatsappNumber"
        l="Whatsapp Number"
        req
        :e="waNuError"
        @change="checkWaNu"
      />
      <FormInput id="birthdate" t="date" l="Birthdate" />
      <FormInput
        id="profile_img"
        v-model="profileImg"
        t="file"
        l="Profile Picture"
        :e="profileImgError"
        @change="checkProfileImg"
      />
      <FormSelect
        id="governorate"
        l="Governorate"
        ph="Select the governorate"
        full
        req
      >
        <option v-for="gov in governorates" :key="gov.id" :value="gov.id">
          {{ gov.n_en }} - {{ gov.n_ar }}
        </option>
      </FormSelect>
      <FormInput id="question" l="How did you hear about us ?" full req />
      <FormInput
        id="charging_nu"
        v-model="chargingNumber"
        l="Charging Number"
        req
        :e="chargingNuError"
        @change="checkChargingNu"
      />
      <FormInput
        id="receipt_img"
        v-model="receiptImg"
        t="file"
        l="Receipt Screenshot"
        req
        :e="receiptImgError"
        @change="checkReceiptImg"
      />
      <div class="mb-4 pt-2">
        <input
          id="ticket-form-agreement"
          v-model="agreement"
          type="checkbox"
          class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-200 focus:ring-2 focus:ring-primary-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
        />
        <label
          for="ticket-form-agreement"
          class="ml-2 select-none font-medium text-gray-900 dark:text-gray-300"
        >
          I have read the <Marked t="Instructions" /> and the
          <Marked t="Notice" />
        </label>
      </div>
      <div class="mb-4 lg:self-end lg:justify-self-end">
        <Btn l="SUBMIT" :disabled="disableBtn" submit />
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import swal from "sweetalert2";

import governorates from "@/data/governorates.json";
import interests from "@/data/interests.json";

let submitting = false;

const agreement = ref(false);
const disableBtn = ref(false);
const emailAddress = ref("");
const emailError = ref("");
const whatsappNumber = ref("");
const waNuError = ref("");
const selectedInterests = ref([] as string[]);
const chargingNumber = ref("");
const chargingNuError = ref("");
const profileImg = ref(undefined as File | undefined);
const profileImgError = ref("");
const receiptImg = ref(undefined as File | undefined);
const receiptImgError = ref("");

const parsedWaNu = computed(() => {
  return whatsappNumber.value.match(/^01([0-2]|5)[0-9]{8}$/)
    ? `+2${whatsappNumber.value}`
    : whatsappNumber.value;
});
const parsedInterests = computed(() => {
  return selectedInterests.value.join(", ");
});

function fail(): void {
  swal.fire({
    title: "Error!",
    icon: "error",
    text: "Please refresh the page and try again, or contact the support.",
    confirmButtonText: "OK",
    confirmButtonColor: "var(--color-primary-300)"
  });
}

const config = useRuntimeConfig();

function checkField(field: string, value: string): Promise<unknown> {
  return $fetch(`${config.public.api}/tickets/book/check`, {
    method: "POST",
    body: {
      field,
      value
    }
  });
}
async function checkEmail(): Promise<boolean> {
  try {
    const res = await checkField("email", emailAddress.value);
    const status = <boolean>(<Record<string, unknown>>res).status;
    emailError.value = status ? "" : "Invalid or used email address!";
    return status;
  } catch (error) {
    fail();
    return false;
  }
}
async function checkWaNu(): Promise<boolean> {
  try {
    whatsappNumber.value = <string>parsedWaNu.value;
    const res = await checkField("wa_nu", parsedWaNu.value);
    const status = <boolean>(<Record<string, unknown>>res).status;
    waNuError.value = status ? "" : "Invalid or used whatsapp number!";
    return status;
  } catch (error) {
    fail();
    return false;
  }
}
function checkChargingNu(): boolean {
  const status = !!chargingNumber.value.match(/^01([0-2]|5)[0-9]{8}$/);
  chargingNuError.value = status ? "" : "Number format should be 01XXXXXXXXX";
  return status;
}

function checkImg(file: File): boolean {
  if (file.type.match(/^image\/[A-z]+$/) && file.size <= 5 * (1024 * 1024))
    return true;
  return false;
}
function checkProfileImg(): boolean {
  if (!profileImg.value || (profileImg.value && checkImg(profileImg.value))) {
    profileImgError.value = "";
    return true;
  } else {
    profileImgError.value = "Only images of size 5MB or less are allowed!";
    return false;
  }
}
function checkReceiptImg(): boolean {
  if (receiptImg.value && checkImg(receiptImg.value)) {
    receiptImgError.value = "";
    return true;
  } else {
    receiptImgError.value = "Only images of size 5MB or less are allowed!";
    return false;
  }
}

function success(): void {
  swal.fire({
    title: "The Payment was a Success!",
    icon: "success",
    html: "We will notify you when we send the tickets! Wait for our email from <span class='text-primary-300 font-bold'>tickets@tedxfay.org</span>",
    confirmButtonText: "OK",
    confirmButtonColor: "var(--color-primary-200)"
  });
}

async function submitHandle(event: Event): Promise<void> {
  if (!submitting) {
    submitting = true;
    swal.fire({
      title: "Saving payment",
      text: "Saving your payment record!",
      allowOutsideClick: false
    });
    swal.showLoading();
    await submit(new FormData(<HTMLFormElement>event.target));
    submitting = false;
  }
}

async function submit(rawData: FormData): Promise<boolean> {
  const data = new FormData();
  for (const datum of rawData.entries()) {
    if (datum[1] !== "") {
      data.append(datum[0], datum[1]);
    }
  }
  try {
    if (!agreement.value) {
      swal.fire({
        icon: "info",
        text: "Please read the instructions and the notice",
        confirmButtonText: "OK",
        confirmButtonColor: "var(--color-primary-300)"
      });
      return false;
    }
    const checkResult = [
      await checkEmail(),
      await checkWaNu(),
      await checkReceiptImg(),
      await checkProfileImg()
    ];
    if (checkResult.includes(false)) {
      swal.fire({
        title: "Invalid data!",
        icon: "error",
        text: "Invalid entered form data!",
        confirmButtonText: "OK",
        confirmButtonColor: "var(--color-primary-300)"
      });
      return false;
    }
    const res = await $fetch(`${config.public.api}/tickets/book`, {
      method: "POST",
      body: data
    });
    if ((<Record<string, string>>res).status) {
      success();
      return true;
    } else {
      throw new Error("Failed!");
    }
  } catch (error) {
    fail();
    return false;
  }
}
</script>
