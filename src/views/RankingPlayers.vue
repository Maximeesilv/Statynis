<template>
    <div class="styns__view container">
        <cards-list
            :list="playersList"
        />
    </div>
</template>

<script>
import CardsList from '@/components/molecules/CardsList';
import { mapState } from 'vuex';

export default {
    name: 'RankingPlayers',
    components: {
        CardsList
    },
    computed: {
        ...mapState({
            playersList: state => state.players
        })
    },
}
</script>