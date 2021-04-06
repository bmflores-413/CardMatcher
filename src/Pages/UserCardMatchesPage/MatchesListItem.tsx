import { useState } from "react"
import { CheckboxWithLabel } from "../../Components"
import { CreditCard } from "../../types"

export const MatchesListItem = ({card, onCardSelected}: {card: CreditCard, onCardSelected: (card: CreditCard, checkedStatus: boolean)=>void}) => {
  const [checked, setChecked] = useState(false)
  const onCheck = () => {
    onCardSelected(card, !checked);
    setChecked(prev => !prev);
  }
  return (
    <li>
      <CheckboxWithLabel checked={checked} onCheck={onCheck} label={card.name}/>
    </li>
  )
}