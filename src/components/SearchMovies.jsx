import Stack from "react-bootstrap/Stack";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const SearchMovies = (props) => {
  return (
    <>
      <div>
        <Form onSubmit={props.onSubmit}>
          <Stack
            direction="horizontal"
            gap={3}
            className="p-5 justify-content-center"
          >
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Cari Movies ..."
                required
                onChange={(e) => props.onChange(e.target.value)}
              />
            </Form.Group>

            <Form.Group>
              <Button type="submit" variant="primary">
                Cari
              </Button>
            </Form.Group>
          </Stack>
        </Form>
      </div>
    </>
  );
};

export default SearchMovies;
