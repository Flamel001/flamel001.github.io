import { expect, describe, it } from 'vitest'
import { render } from '@testing-library/svelte'
import BrightnessMeter from './BrightnessMeter.svelte'

describe('BrightnessMeter', () => {

  it('Renders with default values', () => {
    const { container } = render(BrightnessMeter)
    expect(container.innerHTML).toMatchSnapshot()
  })

  it('Left icon highlighted when value < optimum', () => {
    const { container } = render(BrightnessMeter,{value:0.5,optimum:0.6})
    expect(container.innerHTML).toMatchSnapshot()
  })

  it('Right icon is highlighted when value >= optimum', () => {
    const { container } = render(BrightnessMeter,{value:0.5,optimum:0.5})
    expect(container.innerHTML).toMatchSnapshot()
  })
})
