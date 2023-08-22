<template>
    <div v-if="player">
        <h1>{{ player.firstName }} {{ player.lastName }}</h1>
        <p>Position: {{ positionSwitch(player.position) }}</p>
        <p>Nation: {{ player.nation }}</p>
        <p>Kit Number: {{ player.number }}</p>
        <p v-if="player.loan">Current Club: {{ player.loan.club }}, {{ player.loan.length }}</p>
        <p v-else>Current Club: Arsenal</p>
    </div>
    <div v-else>
        <h2>Loading Player details...</h2>
    </div>
</template>

<script>
export default {
    props: ['id'],
    data () {
        return {
            player: null
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

<style>

</style>