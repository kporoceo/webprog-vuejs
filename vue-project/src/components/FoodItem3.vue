<template>
    <div class="cherries" v-on:click="countClicks">
        <h2>{{ name }}</h2>
        <p>{{ message }}</p>
        <p id="red">You have clicked me {{ clicks }} times.</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: 'Cherries',
            message: 'I like cherries!',
            clicks: 0
        }
    },
    methods: {
        countClicks() {
            this.clicks++;
        }
    }
};
</script>

<style>
#red {
    font-weight: bold;
    color: rgb(144, 12, 12);
}
</style>