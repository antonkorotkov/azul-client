<script lang="typescript">
  import { useStoreon } from '@storeon/svelte'
  import type { StoreEvents, StoreState } from '../store'

  const { lobby } = useStoreon<StoreState, StoreEvents>('lobby')
</script>

<div>
  <h2>Lobby</h2>
  <p>Online: {$lobby.online}</p>
</div>
