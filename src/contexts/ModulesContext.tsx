import { v4 as uuidv4 } from 'uuid'
import { ReactNode, createContext, useEffect, useState } from 'react'
import iconZero from '../assets/number-square-zero-fill.svg'
import iconOne from '../assets/number-square-one-fill.svg'
import iconTwo from '../assets/number-square-two-fill.svg'
import iconFour from '../assets/number-square-four-fill.svg'
import iconEight from '../assets/number-square-eight-fill.svg'
import { balance, balanceDrawer } from '../components/types'

export interface Module {
  id: string
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

export interface CreateModuleData {
  nameModule: string
  moduleType: string
  frontType: string
  bottomType: string
  knobType: string
  boxWidth: number
  boxHeight: number
  boxDepth: number
  boxThickness: number
  frontThickness: number
  bottomThickness: number
  hingsType: string
  slideType: string
}

interface ModulesContextType {
  modules: Module[] | null
  balance: number
  balanceDrawer: number
  iconOne: string
  iconTwo: string
  iconFour: string
  iconEight: string
  deleteModule: (id: string) => void
  createNewModule: (data: CreateModuleData) => void
}

interface ModulesContextProviderProps {
  children: ReactNode
}

export const ModulesContext = createContext({} as ModulesContextType)

export function ModulesContextProvider({
  children,
}: ModulesContextProviderProps) {
  const [modules, setModules] = useState<Module[] | null>(null)

  useEffect(() => {
    const items = JSON.parse(
      localStorage.getItem('@modules:modules-state-1.0.0')!,
    )
    if (items) {
      setModules(items)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(
      '@modules:modules-state-1.0.0',
      JSON.stringify(modules),
    )
  }, [modules])

  function createNewModule(data: CreateModuleData) {
    const moduleBase = {
      id: uuidv4(),
      namePart: data.moduleType === 'Superior' ? 'Bases' : 'Base',
      icon: data.moduleType === 'Superior' ? iconTwo : iconOne,
      measurements: {
        width: data.boxWidth - 2 * data.boxThickness,
        height: data.boxDepth - data.bottomThickness,
      },
    }

    const moduleSide = {
      id: uuidv4(),
      namePart: 'Laterais',
      icon: iconTwo,
      measurements: {
        width: data.boxHeight,
        height: data.boxDepth - data.bottomThickness,
      },
    }

    const moduleBottom = {
      id: uuidv4(),
      namePart: 'Fundo',
      icon: iconOne,
      measurements: {
        width: data.boxWidth - 2,
        height: data.boxHeight - 2,
      },
    }

    const shelf = {
      id: uuidv4(),
      namePart: data.boxHeight <= 750 ? 'Prateleira' : 'Prateleiras',
      icon: data.boxHeight <= 750 ? iconOne : iconTwo,
      measurements: {
        width: data.boxWidth - 2 * data.boxThickness - 2,
        height: data.boxDepth - (40 + data.boxThickness),
      },
    }

    const oneDoorFront = {
      id: uuidv4(),
      namePart: 'Porta',
      icon: data.frontType === '1 porta' ? iconOne : '',
      measurements: {
        width: data.boxWidth - balance,
        height:
          data.moduleType === 'Superior'
            ? data.boxHeight - balance
            : data.boxHeight - (20 + balance),
      },
    }

    const twoDoorsFront = {
      id: uuidv4(),
      namePart: 'Portas',
      icon: data.frontType === '2 portas' ? iconTwo : '',
      measurements: {
        width: (data.boxWidth - 2 * balance) / 2,
        height:
          data.moduleType === 'Superior'
            ? data.boxHeight - balance
            : data.boxHeight - (20 + balance),
      },
    }

    const TwoDrawersFronts = {
      id: uuidv4(),
      namePart: 'Frentes',
      icon: data.frontType === '2 gavet??es' ? iconTwo : '',
      measurements: {
        width: data.boxWidth - balance,
        height: (data.boxHeight - (20 + 2 * balance)) / 2,
      },
    }

    const fourDrawersFronts = {
      id: uuidv4(),
      namePart: 'Frentes',
      icon: data.frontType === '4 gavetas' ? iconFour : '',
      measurements: {
        width: data.boxWidth - balance,
        height: (data.boxHeight - (20 + 4 * balance)) / 4,
      },
    }

    const moduleFronts =
      data.frontType === '2 portas'
        ? twoDoorsFront
        : data.frontType === '2 gavet??es'
        ? TwoDrawersFronts
        : data.frontType === '4 gavetas'
        ? fourDrawersFronts
        : oneDoorFront

    const drawerBase = {
      id: uuidv4(),
      namePart: 'Bases',

      icon:
        data.frontType === '4 gavetas'
          ? iconEight
          : data.frontType === '2 gavet??es'
          ? iconFour
          : iconZero,

      measurements: {
        width: data.boxWidth - 4 * data.boxThickness - balanceDrawer,

        height:
          data.frontType === '4 gavetas'
            ? 120
            : data.frontType === '2 gavet??es'
            ? 240
            : 0,
      },
    }

    const drawerSide = {
      id: uuidv4(),
      namePart: 'Laterais',
      icon:
        data.frontType === '4 gavetas'
          ? iconEight
          : data.frontType === '2 gavet??es'
          ? iconFour
          : iconZero,
      measurements: {
        width: data.boxDepth - 80,
        height:
          data.frontType === '4 gavetas'
            ? 120
            : data.frontType === '2 gavet??es'
            ? 240
            : 0,
      },
    }

    const drawerBottom = {
      id: uuidv4(),
      namePart: 'Fundos',
      icon:
        data.frontType === '4 gavetas'
          ? iconFour
          : data.frontType === '2 gavet??es'
          ? iconTwo
          : iconZero,
      measurements: {
        width:
          data.bottomType === 'Aparafusado'
            ? data.boxWidth - 2 * data.boxThickness - balanceDrawer - 3
            : data.boxWidth - 4 * data.boxThickness - balanceDrawer + 10,
        height:
          data.bottomType === 'Aparafusado'
            ? data.boxDepth - 83
            : data.boxDepth - 80 - 2 * data.boxThickness + 10,
      },
    }

    const isDrawer =
      data.frontType === '2 portas'
        ? false
        : data.frontType === '2 gavet??es'
        ? true
        : data.frontType === '4 gavetas'
        ? true
        : data.moduleType === 'Gaveteiro'

    const iconHardwareHings =
      data.moduleType === 'Inferior' ||
      (data.moduleType === 'Superior' &&
        data.frontType === '1 porta' &&
        data.boxHeight <= 1000)
        ? iconTwo
        : data.moduleType === 'Inferior' ||
          (data.moduleType === 'Superior' &&
            data.frontType === '1 porta' &&
            data.boxHeight > 1000)
        ? iconTwo
        : data.moduleType === 'Inferior' ||
          (data.moduleType === 'Superior' &&
            data.frontType === '2 portas' &&
            data.boxHeight <= 1000)
        ? iconFour
        : data.frontType === '2 portas' && data.boxHeight > 1000
        ? iconEight
        : ''

    const iconHardwareDrawer =
      data.moduleType === 'Gaveteiro' && data.frontType === '2 gavet??es'
        ? iconTwo
        : data.moduleType === 'Gaveteiro' && data.frontType === '4 gavetas'
        ? iconFour
        : ''

    const measurementsHardwareDrawer =
      data.moduleType === 'Gaveteiro' && data.boxDepth - 80 >= 510
        ? '500mm'
        : data.moduleType === 'Gaveteiro' && data.boxDepth - 80 >= 460
        ? '450mm'
        : data.moduleType === 'Gaveteiro' && data.boxDepth - 80 >= 410
        ? '400mm'
        : data.moduleType === 'Gaveteiro' && data.boxDepth - 80 >= 360
        ? '350mm'
        : data.moduleType === 'Gaveteiro' && data.boxDepth - 80 >= 310
        ? '300mm'
        : data.moduleType === 'Gaveteiro' && data.boxDepth - 80 >= 260
        ? '250mm'
        : ''

    const hings = {
      id: uuidv4(),
      nameHardware:
        data.moduleType === 'Inferior' || data.moduleType === 'Superior'
          ? 'Dobradi??as'
          : '',
      icon: iconHardwareHings,
      measurements:
        data.moduleType === 'Inferior' || data.moduleType === 'Superior'
          ? '35mm'
          : '',
    }

    const slides = {
      id: uuidv4(),
      nameHardware: data.moduleType === 'Gaveteiro' ? 'Corredi??as' : '',
      icon: iconHardwareDrawer,
      measurements:
        data.moduleType === 'Gaveteiro' ? measurementsHardwareDrawer : '',
    }

    const slat = {
      id: uuidv4(),
      namePart: 'Travessa',
      icon: iconTwo,
      measurements: {
        width: data.boxWidth - 2 * data.boxThickness,
        height: 100,
      },
    }

    const newModule: Module = {
      id: uuidv4(),
      nameModule: data.nameModule,
      moduleType: data.moduleType,
      bottomType: data.bottomType,
      knobType: data.knobType,
      boxThickness: data.boxThickness,
      frontThickness: data.frontThickness,
      bottomThickness: data.bottomThickness,
      isDrawer,
      hingsType: data.hingsType,
      slideType: data.slideType,
      hardwares: [hings, slides],
      parts: [moduleBase, moduleSide, moduleFronts, shelf, slat, moduleBottom],
      drawers: [drawerBase, drawerSide, drawerBottom],
    }
    if (modules !== null) {
      setModules([...modules, newModule])
    }
  }

  function deleteModule(moduleToDelete: string) {
    const deleteModule = modules!.filter(
      (module) => module.id !== moduleToDelete,
    )
    setModules(deleteModule)
  }

  return (
    <ModulesContext.Provider
      value={{
        modules,
        balance,
        balanceDrawer,
        iconOne,
        iconTwo,
        iconFour,
        iconEight,
        deleteModule,
        createNewModule,
      }}
    >
      {children}
    </ModulesContext.Provider>
  )
}
