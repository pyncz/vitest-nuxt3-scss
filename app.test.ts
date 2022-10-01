import { describe, expect, test } from 'vitest'
import { setup } from '@nuxt/test-utils-edge'

export const consoleSpyWarn = vi.spyOn(console, 'warn')
export const consoleSpyError = vi.spyOn(console, 'error')

afterAll(() => {
  expect(consoleSpyWarn).not.toHaveBeenCalled()
  expect(consoleSpyError).not.toHaveBeenCalled()

  vi.restoreAllMocks()
})

describe('Test', async () => {
  await setup({

  })

  test('ur good?', () => {
    expect(true).toBe(true)
  })
})
