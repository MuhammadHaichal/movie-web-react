import Stack from "react-bootstrap/Stack";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

  return (
    <>
      <div>
        <Form onSubmit={props.onSubmit}>
          <Stack
            direction="horizontal"
            gap={3}
            className="p-5 justify-content-center"
          >
            <Form.Group className="w-full" controlId="exampleForm.ControlInput1">
              <Form.Control
                className=" p-2"
                type="text"
                placeholder="Cari Movies ..."
                required
                onChange={(e) => props.onChange(e.target.value)}
              />
            </Form.Group>
            
            <Form.Group>
            	<Button className="p-2" type="submit" variant="primary">Search 🔎</Button>
            </Form.Group>
           
		    
          </Stack>
        </Form>
      </div>
    </>
  );
};

export default SearchMovies;
