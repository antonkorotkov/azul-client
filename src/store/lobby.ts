import type { StoreonStore } from 'storeon'

export interface LobbyStore {
  lobby: {
    online: number
  }
}

export interface LobbyStoreEvents {
  'lobby.updateWaitingPlayers': number
}

export const lobby = (
  store: StoreonStore<LobbyStore, LobbyStoreEvents>
): void => {
  store.on('@init', () => {
    return {
      lobby: {
        online: 0,
      },
    }
  })

  store.on(
    'lobby.updateWaitingPlayers',
    (state: LobbyStore, online: number): LobbyStore => {
      return {
        lobby: {
          ...state.lobby,
          online,
        },
      }
    }
  )
}
