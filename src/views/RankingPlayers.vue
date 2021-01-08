<template>
    <div class="styns__view container">
        <cards-list
        />
    </div>
</template>

<script>
import CardsList from '@/components/molecules/CardsList';

export default {
    name: 'RankingPlayers',
    components: {
        CardsList
    }
}
</script>