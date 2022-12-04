import { X } from 'phosphor-react'
import { Text } from '../../../../components/Text'
import { CardProps } from '../../../../components/types'

export function CardDrawer({ content }: CardProps) {
  return (
    <ul>
      {content.drawers.map((drawer) => {
        return (
          <li className="lineParts" key={drawer.id}>
            <img src={drawer.icon} className="w-8 h-8" alt="" />

            <Text className="itemLineParts flex-1 ml-4">{drawer.namePart}</Text>

            <Text className="itemLineParts">
              <span>{drawer.measurements.width}</span>
              <X size={12} weight="bold" />
              <span>{drawer.measurements.height}</span>
            </Text>
          </li>
        )
      })}
    </ul>
  )
}
