<template>
  <button :class="buttonClass" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: "button",
  },
  variant: {
    type: String,
    default: "default",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["click"]);

const handleClick = (event) => {
  if (!props.disabled) {
    emit("click", event);
  }
};

const buttonClass = computed(() => {
  return {
    btn: true,
    [`btn-${props.variant}`]: true,
    "btn-disabled": props.disabled,
  };
});
</script>

<style scoped>
.btn {
  padding: 5px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-default {
  background-color: #007bff;
  color: white;
}

.btn-primary {
  background-color: #0069d9;
  color: white;
}

.btn-secondary {
  background-color: #6c757d;
  color: white;
}

.btn-disabled {
  background-color: #e0e0e0;
  color: #a0a0a0;
  cursor: not-allowed;
}
</style>
