type Props = {
  amount: number;
};

export default function PriceTag({ amount }: Props) {
  return <span className="price">${amount}</span>;
}