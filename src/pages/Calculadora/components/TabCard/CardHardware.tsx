import { Text } from '../../../../components/Text'
import { CardProps } from '../../../../components/types'

export function CardHardware({ content }: CardProps) {
  return (
    <ul>
      {content.hardwares.map((hardware) => {
        return (
          <article key={hardware.id}>
            {hardware.nameHardware === '' ? null : (
              <li className="lineParts">
                <img src={hardware.icon} className="w-8 h-8" alt="" />

                <Text className="itemLineParts flex-1 ml-4">
                  {hardware.nameHardware}
                </Text>

                <Text className="itemLineParts">{hardware.measurements}</Text>
              </li>
            )}
          </article>
        )
      })}
    </ul>
  )
}
