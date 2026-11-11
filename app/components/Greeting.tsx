type Props = {
  name: string;
};

export default function Greeting({ name }: Props) {
  return <h2>Hello, {name}!</h2>;
}