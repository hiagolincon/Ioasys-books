import { forwardRef } from 'react'

import { Container, LoadingBalls } from './styles'
import { InputProps } from './types'

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ name, type = 'text', label, action, ...rest }, ref) => {
    return (
      <Container className="inputContainer">
        <div>
          <label className="fontIoasys-regular" htmlFor={name}>
            {label}
          </label>
          <input
            className="fontIoasys-regular"
            name={name}
            type={type}
            id={name}
            ref={ref}
            {...rest}
          />
        </div>
        {action && (
          <button
            type="button"
            onClick={action.click}
            disabled={action.disable}
          >
            {action.loading ? (
              <LoadingBalls>
                <div />
                <div />
                <div />
              </LoadingBalls>
            ) : (
              action.text
            )}
          </button>
        )}
      </Container>
    )
  },
)
