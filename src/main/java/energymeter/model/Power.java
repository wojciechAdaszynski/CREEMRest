package energymeter.model;

import java.sql.Timestamp;

/**
 * Created by root on 7/6/15.
 */

public class Power extends EnergyAbstract {

    public Power(String id, double value, Timestamp timestamp) {
        super(id, value, timestamp);
    }

    public Power() {}
}
