import styled from "styled-components";

function CardServices({ title, subtitle, img }) {
  return (
    <Card className="w-full lg:w-[90%] px-4 py-8">
      <div className="flex justify-between items-center gap-4">
        <H1 className="text-[18px]">{title}</H1>
        <Img
          src={`${process.env.PUBLIC_URL}/image/generalServices/${img}`}
          alt=""
          className="w-12 h-13"
        />
      </div>
      <P className="text-xs mt-2">{subtitle}</P>
    </Card>
  );
}

export default CardServices;

const Card = styled.div`
  background-color: ${(props) => props.theme.colors.gray};
  border-radius: 12px;
  border: 1px 0px 0px 0px;
  border: 1px solid #ffd700;
`;

const H1 = styled.h1`
  color: ${(props) => props.theme.colors.white};
`;

const P = styled.p`
  color: ${(props) => props.theme.colors.white};
`;

const Img = styled.img`
  color: ${(props) => props.theme.colors.yellow};
`;
