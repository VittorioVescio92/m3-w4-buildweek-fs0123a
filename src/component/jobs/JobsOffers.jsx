import { Badge, Button, Col } from "react-bootstrap";
import JobOffer from "./JobOffer";

const JobsOffers = () => {
  return (
    <Col md={6}>
      {/* AVVIA UN POST */}
      <div className="bg-white border rounded mt-3">
        <div className="m-3">
          <div className="d-flex mb-3">
            <div className="d-flex align-items-center">
              <h5 className="me-5">Ricerche di offerte di lavoro recenti</h5>
              <Button variant="light" size="sm" className="text-secondary rounded">
                Cancella
              </Button>
            </div>
          </div>
          <div>
            <p className="fw-bold mb-0">
              qualsiasi - <span className="text-success fw-light">4 nuove</span>
            </p>
            <Badge bg="white" text="secondary" className="p-0">
              Avviso attivo - Napoli,Campania,Italia
            </Badge>
          </div>
        </div>
      </div>

      <div className="bg-white border rounded mt-3 post">
        <div className="m-3">
          <div className="d-flex mb-4">
            <div className="mt-2">
              <h5 className="m-0">Consigliato per te</h5>
              <span className="fw-light text-secondary">
                Sulla base del tuo profilo e della tua cronologia delle ricerche
              </span>
            </div>
          </div>

          {/* POSTS */}
          <JobOffer />
        </div>
      </div>
    </Col>
  );
};
export default JobsOffers;
