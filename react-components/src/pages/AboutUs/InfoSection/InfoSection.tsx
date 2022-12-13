import { Side } from './SideEnum';
import { StyledInfoSection } from './StyledInfoSection';

type InfoSectionProps = { side: Side; img: string; children: React.ReactNode };

export function InfoSection(props: InfoSectionProps) {
  const { side, children, img } = props;

  return (
    <StyledInfoSection side={side}>
      <div>{children}</div>
      <img src={img} alt="mountain landscape"></img>
    </StyledInfoSection>
  );
}
