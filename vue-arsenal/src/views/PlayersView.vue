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
    <div v-else id="loading">
        <img src="../assets/images/arsenal-logo.svg" alt="arsenal">
        <h2>Loading players...</h2>
    </div>
</template>

<script>
import PlayerCard from '../components/Players/PlayerCard.vue'

export default {
    components: { PlayerCard },
    data () {
        return {
            players: []
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
        width: 80%;
    }
    div#loading {
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
    }
    div#loading img {
        margin-top: 100px;
        width: auto;
        height: 150px;
    }
</style>