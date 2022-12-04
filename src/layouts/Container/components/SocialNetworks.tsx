import { FacebookLogo, InstagramLogo } from 'phosphor-react'
import { SocialNetworksProps } from '../../../components/types'

export function SocialNetworks({ tailwind, size }: SocialNetworksProps) {
  return (
    <ul className={tailwind}>
      <li className="flex items-center">
        <a target="_blank" rel="noreferrer" href="">
          <FacebookLogo size={size} weight="fill" />
        </a>
      </li>

      <li className="flex items-center ml-0.5">
        <a target="_blank" rel="noreferrer" href="">
          <InstagramLogo size={size} weight="fill" />
        </a>
      </li>
    </ul>
  )
}
