<template>
    <b-button rounded @click="emitClick">
        {{ text }}
    </b-button>
</template>

<script>
export default {
    name: 'BasicButton',
    props: {
        text: {
            type: String,
            default: () => ''
        }
    },
    methods: {
        emitClick() {
            this.$emit('hasBeenClicked')
        }
    }
}
</script>