<template>
    <span>
        <i 
            class="material-icons clickable icon"
            :title="`Сортировать по ${downward ? 'возрастанию' : 'уменьшению'}`"
            @click="turn"
        >
            {{ downward ? 'arrow_downward' : 'arrow_upward'}}
        </i>
    </span>
</template>

<script>
    export default {
        name: 'SortIcon',
        props: ['field'],
        data: () => ({
            downward: true
        }),
        computed: {
            mutationName () {
                if (this.field === 'price') {
                    return this.downward ? 'SORT_BY_PRICE_UP' : 'SORT_BY_PRICE_DOWN'
                } else {
                    return this.downward ? 'SORT_BY_DATE_DOWN' : 'SORT_BY_DATE_UP'
                }
            }
        },
        methods: {
            turn () {
                this.downward = !this.downward
                this.$store.commit(this.mutationName)
            }
        }
    }
</script>

<style>
.icon {
    font-size: medium;
}
</style>