import { InputHTMLAttributes } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
  action?:
    | {
        text: string
        click(): void
        loading: boolean
        disable: boolean
      }
    | undefined
}
