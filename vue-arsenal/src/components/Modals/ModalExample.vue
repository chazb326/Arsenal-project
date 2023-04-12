<template>
    <div class="backdrop" @click.self="closeModal">
        <div class="modal" :class="{ red: theme === 'red' }">
            <slot>Arsenal</slot>
            <div class="actions">
                <slot name="links"></slot>
            </div>
        </div>        
    </div>
</template>

<script>
export default {
    props: ['header', 'text', 'theme'],
    methods: {
        closeModal() {
            this.$emit('close')
        }
    }
}
</script>

<style>
    .backdrop {
        top: 0;
        position: fixed;
        background: rgba(0,0,0,0.5);
        width: 100%;
        height: 100%;
        z-index: 2;
    }
    .modal {
        width: 400px;
        padding: 20px;
        position: relative;
        top: 100px;
        margin: 100px auto;
        background: white;
        border-radius: 10px;
        text-align: center;
        z-index: 3;
    }

    .modal .actions {
        text-align: center;
        margin: 30px 0 10px 0;
    }
    .modal .actions a {
        color: #333;
        padding: 8px;
        border: 1px solid #eee;
        border-radius: 4px;
        text-decoration: none;
        margin: 10px;
    }
    .modal h1 {
        color: rgb(6, 54, 114);
        border: none;
        padding: 0;
    }

    .modal.red {
        background: rgb(219, 0, 7);
        color: white;
    }
    .modal.red h1 {
        color: white;
    }

    .modal.red .actions {
        color: white;
    }
    .modal.red .actions a {
        color: white;
    }
</style>