import { Side } from './SideEnum';
import { StyledInfoSection } from './StyledInfoSection';

type InfoSectionProps = { side: Side; img: string; children: React.ReactNode };

export function InfoSection(props: InfoSectionProps) {
  return (
    <StyledInfoSection side={props.side}>
      <div>{props.children}</div>
      <img src={props.img} alt="mountain landscape"></img>
    </StyledInfoSection>
  );
}
