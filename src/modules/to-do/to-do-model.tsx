import { Column } from "material-table";
import Checkbox from '@material-ui/core/Checkbox'
import Typography from '@material-ui/core/Typography'
import { 
  FetchToDos_toDosList_items as ToDo
} from "../../shared/graphql-types";

export const columns: Array<Column<ToDo>> = [
  { 
    title: '', 
    field: 'finished', 
    type: 'boolean', 
    width: 100,
    render: (data) => <Checkbox disableRipple checked={data.finished || false} />
  },
  { 
    title: 'Id', 
    field: 'identifier', 
    width: 100,
    render: (data) => <Typography variant="body2">{data.identifier}</Typography>
  },
  { 
    title: 'Title', 
    field: 'title',
    render: (data) => <Typography variant="body2">{data.title}</Typography>
  },
  { 
    title: 'Description', 
    field: 'description',
    render: (data) => <Typography variant="body2">{data.description}</Typography>
  }
];