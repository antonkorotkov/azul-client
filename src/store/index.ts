import { createStoreon, StoreonStore } from 'storeon'
import { storeonDevtools } from 'storeon/devtools'

import { game, GameStore, GameStoreEvents } from './game'
import { lobby, LobbyStore, LobbyStoreEvents } from './lobby'

export type StoreState = GameStore & LobbyStore
export type StoreEvents = GameStoreEvents & LobbyStoreEvents

export const store: StoreonStore = createStoreon<StoreState, StoreEvents>([
  game,
  lobby,
  storeonDevtools,
])
