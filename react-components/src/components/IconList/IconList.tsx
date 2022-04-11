import { Icon, IconRow, StyledIconList } from './StyledIconList';

type Data = { [key: string]: string | number | boolean };
type DataDecoration = Array<{ name: keyof Data; icon: string; text?: string }>;

type IconListProps = { data: Data; dataDecoration: DataDecoration };

export const IconList = (props: IconListProps) => (
  <StyledIconList>
    {props.dataDecoration.map((field, idx) =>
      props.data[field.name] ? (
        <IconRow key={idx}>
          <Icon src={require(`assets/svg/${field.icon}`)} />
          {`${props.data[field.name]} ${field.text ?? ''}`}
        </IconRow>
      ) : null
    )}
  </StyledIconList>
);
