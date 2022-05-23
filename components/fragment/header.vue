<template>
  <header class="mt-3 flex flex-col items-center">
    <div class="select-none text-left font-ted">
      <div class="text-3xl md:text-4xl">
        <div class="flex text-primary-400">
          <div
            class="animate__animated animate__fadeInLeft text-4xl font-bold-ted tracking-ted md:text-5xl"
          >
            TED
          </div>
          <div
            class="animate__animated animate__delay-1s animate__flipInY font-bold leading-ted"
          >
            x
          </div>
        </div>
        <div class="animate__animated animate__fadeInRight">
          Youth@FayoumSTEM
        </div>
      </div>
      <div class="animate__animated animate__delay-2s animate__flipInX mt-1">
        <Marked t="x" priority="high" />=independently organized
        <span class="font-bold">TED</span> event
      </div>
    </div>
    <nav class="animate__animated animate__delay-2s animate__fadeIn mt-3">
      <NavbarLink to="/">Event</NavbarLink>
      <NavbarLink to="/tickets">Tickets</NavbarLink>
    </nav>
  </header>
</template>
