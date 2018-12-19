<template>
    <div>
        <div>
            <slot name="title"></slot>
            <span style="color: #AAA"><slot name="subtitle">The subtitle</slot></span>
        </div>
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: ['quote']
}
</script>

<style scoped>
    div { 
        border: 1px solid #ccc;
        box-shadow: 1px 1px 2px black;
        padding: 30px;
        margin: 30px audo;
        text-align: center;
    }
    p {
        color: red;
    }

    .title {
        font-style: italic;
    }
</style>
