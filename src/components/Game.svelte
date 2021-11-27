<script lang="typescript">
  import type { Socket } from 'socket.io-client'
  import { useStoreon } from '@storeon/svelte'
  import type { StoreEvents, StoreState } from '../store'
  import Lobby from './Lobby.svelte'

  export let socket: Socket

  const { dispatch, game } = useStoreon<StoreState, StoreEvents>('game')

  socket.on('lobby.updated', players => {
    dispatch('lobby.updateWaitingPlayers', players)
  })
</script>

<main id="game">
  {#if !$game.room}
    <Lobby />
  {/if}
</main>
