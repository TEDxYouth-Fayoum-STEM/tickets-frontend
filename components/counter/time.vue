<template>
  <div class="timer-container flex">
    <CounterUnit :digit="timer.days.value" title="DAYS" />
    <span class="separator-container"><span class="separator" /><span /></span>
    <CounterUnit :digit="timer.hours.value" title="HOURS" />
    <span class="separator-container"><span class="separator" /><span /></span>
    <CounterUnit :digit="timer.minutes.value" title="MINUTES" />
    <span class="separator-container"><span class="separator" /><span /></span>
    <CounterUnit :digit="timer.seconds.value" title="SECONDS" />
  </div>
</template>

<script setup lang="ts">
import { useTimer } from "vue-timer-hook";

const props = defineProps({
  timestamp: {
    type: Number,
    required: true
  }
});

const timer = useTimer(props.timestamp);
</script>

<style scoped>
.timer-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 30px;
}
.separator-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: flex-end;
  margin: 0 0 10px 0px;
}
.separator {
  display: inline-block;
  width: 6px;
  height: 6px;
  background-color: #404549;
  border-radius: 6px;
  margin: 5px 0px;
}
</style>
