<script lang="ts">
  import { io, Socket } from 'socket.io-client'
  import { provideStoreon } from '@storeon/svelte'

  import Game from './components/Game.svelte'
  import { store } from './store'

  const socket: Socket = io('http://localhost:3000')
  provideStoreon(store)
</script>

<Game {socket} />
