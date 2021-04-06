import { CreditCard } from "../../../types";
import { CardDetail } from "./CardDetail";
import { Card } from '../../../Components';

export const CreditCardDetails = ({card}:{card: CreditCard}) => {
  const aprDisplay = `${(card.apr*100).toFixed(1)}%`;
  const creditDisplay = `£${card.creditLimit}`;
  const BTODDisplay = `${card.balanceTransferOfferDuration} months`;
  const PODDisplay = `${card.purchaseOffterDuration} months`
  return (
    <Card title={card.name}>
      <CardDetail detail={'Apr'} value={aprDisplay}/>
      <CardDetail detail={'Balance Transfer Offer Duration'} value={BTODDisplay}/>
      <CardDetail detail={'Purchase Offer Duration'} value={PODDisplay}/>
      <CardDetail detail={'Credit Available'} value={creditDisplay}/>
    </Card>
  )
}