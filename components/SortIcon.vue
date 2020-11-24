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
                switch (this.field) {
                    case 'price':
                        return this.downward ? 'SORT_BY_PRICE_UP' : 'SORT_BY_PRICE_DOWN'
                    case 'date':
                        return this.downward ? 'SORT_BY_DATE_DOWN' : 'SORT_BY_DATE_UP'
                    default:
                        return null
                }
            }
        },
        methods: {
            turn () {
                this.downward = !this.downward
                this.mutationName ? this.$store.commit(this.mutationName) : null
            }
        }
    }
</script>

<style>
.icon {
    font-size: medium;
}
</style>