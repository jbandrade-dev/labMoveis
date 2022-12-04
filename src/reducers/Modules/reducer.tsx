import { ActionTypes } from './actions'

export interface Module {
  id: string
  idProject?: string
  nameProject?: string
  nameModule: string
  moduleType: string
  hingsType: string
  slideType: string
  bottomType: string
  knobType: string
  boxThickness: number
  frontThickness: number
  bottomThickness: number
  isDrawer: boolean
  hardwares: {
    id: string | null
    icon: string
    nameHardware: string
    measurements: string
  }[]
  parts: {
    id: string
    namePart: string
    icon: string
    measurements: {
      width: number
      height: number
    }
  }[]
  drawers: {
    id: string
    namePart: string
    icon: string

    measurements: {
      width: number
      height: number
    }
  }[]
}

interface ModulesState {
  modules: Module[]
}

export function ModulesReducer(state: ModulesState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_MODULE:
      return {
        ...state,
        modules: [...state.modules, action.payload.newModule],
      }
    case ActionTypes.DELETE_MODULE:
      return {
        ...state,
        modules: state.modules.filter(
          (module) => module.id !== action.payload.id,
        ),
      }
  }

  return state
}
