import type { StoreonStore } from 'storeon'

export interface GameStore {
  game: {
    room: string | null
  }
}

export interface GameStoreEvents {}

export const game = (store: StoreonStore<GameStore, GameStoreEvents>): void => {
  store.on('@init', () => {
    return {
      game: {
        room: null,
      },
    }
  })

  // store.on('app/toggleTheme', (state, theme) => {
  //   ls('theme', theme)

  //   return {
  //     app: {
  //       ...state.app,
  //       theme,
  //     },
  //   }
  // })
}
