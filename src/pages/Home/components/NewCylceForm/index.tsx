import { FormContainer, MinutAmountInput, TaskInput } from './styles'
import { useContext } from 'react'

import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../../../../contexts/CyclesContext'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        list="task-suggestions"
        placeholder="Dê um nome para o seu projeto!"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <datalist id="task-suggestions">
        <option value="projeto 1" />
        <option value="projeto 2" />
        <option value="projeto 3" />
      </datalist>

      <label htmlFor="">durante</label>
      <MinutAmountInput
        type="number"
        id="minutesAnount"
        placeholder="00"
        disabled={!!activeCycle}
        step={5}
        min={5}
        max={60}
        // ^- Isso aqui é importante!
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  )
}
