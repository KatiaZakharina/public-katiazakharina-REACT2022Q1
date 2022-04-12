import { Icon, IconRow, StyledIconList } from './StyledIconList';

type Data = { [key: string]: string | number | boolean };
type DataDecoration = Array<{ name: keyof Data; icon: string; text?: string }>;

type IconListProps = { data: Data; dataDecoration: DataDecoration };

export const IconList = (props: IconListProps) => {
  const { dataDecoration, data } = props;

  return (
    <StyledIconList>
      {dataDecoration.map((field, index) => (
        <IconRow key={index}>
          <Icon src={require(`assets/svg/${field.icon}`)} />
          {`${data[field.name]} ${field.text ?? ''}`}
        </IconRow>
      ))}
    </StyledIconList>
  );
};
