
import Styled from 'styled-components'
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export const Container = Styled.div`
padding: 20px;
width: 100%;



`;

export const EditStyledIcon = Styled(EditIcon)`
cursor: pointer;
&:hover{

    color: blue;
}

`


export const DeleteForeverIconStyled = Styled(DeleteForeverIcon)`
cursor: pointer;
&:hover{

    color: red;
}
`