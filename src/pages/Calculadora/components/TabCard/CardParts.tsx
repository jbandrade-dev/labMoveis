import { X } from 'phosphor-react'
import { Text } from '../../../../components/Text'
import { CardProps } from '../../../../components/types'

export function CardParts({ content }: CardProps) {
  return (
    <ul>
      {content.parts.map((part) => {
        return (
          <article key={part.id}>
            {content.isDrawer &&
            part.namePart === 'Prateleira' ? null : content.moduleType ===
                'Superior' && part.namePart === 'Travessa' ? null : (
              <li className="lineParts">
                <img src={part.icon} className="w-8 h-8 " alt="" />

                <Text className="itemLineParts flex-1 ml-4">
                  {part.namePart}
                </Text>

                <Text className="itemLineParts">
                  <span>{part.measurements.width}</span>
                  <X size={12} weight="bold" />
                  <span>{part.measurements.height}</span>
                </Text>
              </li>
            )}
          </article>
        )
      })}
    </ul>
  )
}
