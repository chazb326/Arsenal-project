<template>    
    <h2>Player Details</h2>
    <router-link to="/players">
        <button>Back</button>
    </router-link>
    <div v-if="player" class="player-details">
        <PlayerDetailsCard :player="player"/>
        <div class="extra-details">
            <p>Position: {{ positionSwitch(player.position) }}</p>
            <p v-if="player.loan">Current Club: {{ player.loan.club }}, {{ player.loan.length }}</p>
            <p v-else>Current Club: Arsenal</p>
            <p>TODO: create a PlayerDetailsCard.vue, take away hover, add more data and stats?</p>
            <p>TODO: add a button for users to go back to the Players page</p>
        </div>
    </div>
    <div v-else>
        <LoadingScreen :text="loadingText"/>
    </div>
</template>

<script>
import PlayerDetailsCard from '../../components/Players/PlayerDetailsCard.vue'
import LoadingScreen from '@/components/LoadingScreen.vue';

export default {
    components: { PlayerDetailsCard, LoadingScreen },
    props: ['id'],
    data () {
        return {
            player: null,
            loadingText: "Loading player details..."
        }
    },
    methods: {
        positionSwitch (p) {
            switch (p) {
            case 'gk':
                return 'Goalkeeper';
            case 'lb': 
                return 'Left Back';
            case 'rb': 
                return 'Right Back';
            case 'lcb': 
                return 'Left Centerback';
            case 'rcb': 
                return 'Right Centerback';
            case 'dm': 
                return 'Defensive Midfield';
            case 'cam': 
                return 'Central Attacking Midfield';
            case 'cm': 
                return 'Central Midfield';
            case 'lw': 
                return 'Left Wing';
            case 'rw': 
                return 'Right Wing';
            case 'st': 
                return 'Striker';
            default:
                throw new Error('position not found')
            }
        }
    },
    mounted() {
        fetch(`http://localhost:3000/api/players/${this.id}`)
            .then((res) => res.json() )
            .then(data => this.player = data)
            .catch(err => console.log(err.message))
    }
}
</script>

<style scoped>
    h2 {
        position: relative;
        top: 20px;
        margin-bottom: 40px;
    }
    button {
        position: fixed;
        float: left;
        left: 70px;
        top: 128px;
        font-size: 18px;
    }
    div.player-details {
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
    }
    div.extra-details {
        inline-size: 500px;
        overflow-wrap: break-word;
        margin: 0 auto;
    }
</style>