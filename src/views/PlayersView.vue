<template>
    <div>
        <h2 class="page-header">Current Players</h2>
    </div>
    <div v-if="players.length" id="player-cards">
        <div v-for="player in players" :key="player.id">
            <router-link :to="{ name: 'playerDetails', params: { id: player.id } }">
                <PlayerCard :player="player"/>
            </router-link>
        </div>
        <!-- <PlayerCard :player="players[0]"/> -->
    </div>
    <div v-else>
        <LoadingScreen :text="loadingText"/>
    </div>
</template>

<script>
import PlayerCard from '../components/Players/PlayerCard.vue'
import LoadingScreen from '../components/LoadingScreen.vue'

export default {
    components: { PlayerCard, LoadingScreen },
    data () {
        return {
            players: [],
            loadingText: "Loading players..."
        }
    },
    mounted () {
        fetch('http://localhost:3000/api/players', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => this.players = data.players)
        .catch(err => console.log(err.message))
    }
}
</script>

<style>
    h2 {
        position: relative;
        top: 20px;
        margin-bottom: 30px;
    }
    a {
        text-decoration: none;
        color: black;
    }
    div#player-cards {
        position: relative;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        gap: 10px 30px;
        height: max-content;
        width: 70%;
    }
</style>