import React from 'react'
import { action } from '@storybook/addon-actions'
import styled from 'styled-components'
import { Button } from '@/components/Button/Button'

const Container = styled.div`
  display: flex;
  
  button {
    margin: 10px;
  }
`

const InfoCircleIcon = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 7C12.5523 7 13 7.44772 13 8V13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13V8C11 7.44772 11.4477 7 12 7Z" fill="currentColor" />
      <path d="M12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12Z" fill="currentColor" />
    </svg>
  )
}

const NewButton = () => {
  return (
    <>
      <Container>
        <Button
          className="test"
          size="small"
          onMouseEnter={action('onMouseEnter')}
          onClick={action('onClick')}
          onMouseLeave={action('onMouseLeave')}
          onFocus={action('onFocus')}
          onBlur={action('onBlur')}
        >
          example button
        </Button>
        <Button
          size="small"
          addonLeft={InfoCircleIcon()}
        >
          example button
        </Button>
        <Button
          size="small"
          addonRight={InfoCircleIcon()}
        >
          example button
        </Button>
        <Button size="small">
          {InfoCircleIcon()}
        </Button>
        <Button size="small" disabled>
          disabled button
        </Button>
      </Container>

      <Container>
        <Button
          size="medium"
          color="dark"
        >
          example button
        </Button>
        <Button
          size="medium"
          color="dark"
          addonLeft={InfoCircleIcon()}
        >
          example button
        </Button>
        <Button
          size="medium"
          color="dark"
          addonRight={InfoCircleIcon()}
        >
          example button
        </Button>
        <Button
          size="medium"
          color="dark"
        >
          {InfoCircleIcon()}
        </Button>
        <Button
          size="medium"
          color="dark"
          disabled
        >
          disabled button
        </Button>
      </Container>

      <Container>
        <Button
          size="large"
          color="info"
        >
          example button
        </Button>
        <Button
          size="large"
          color="info"
          addonLeft={InfoCircleIcon()}
        >
          example button
        </Button>
        <Button
          size="large"
          color="info"
          addonRight={InfoCircleIcon()}
        >
          example button
        </Button>
        <Button
          size="large"
          color="info"
        >
          {InfoCircleIcon()}
        </Button>
        <Button
          size="large"
          color="info"
          disabled
        >
          disabled button
        </Button>
      </Container>
    </>
  )
}

export default NewButton
