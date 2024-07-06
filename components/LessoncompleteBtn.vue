<template>
    <div>
        <label for="">
            <input type="checkbox" 
                :value="modelValue"
                @input="() => $emit('update:modelValue', !modelValue)"
                name="" id="">
            {{ modelValue ? 'completed!' : 'Mark as Complete' }}
        </label>
</div>
</template>

<script setup>
defineProps({
    modelValue: {
        type: Boolean,
        default: false
    }
})

defineEmits(['update:modelValue'])
</script>

<style scoped>

</style>
