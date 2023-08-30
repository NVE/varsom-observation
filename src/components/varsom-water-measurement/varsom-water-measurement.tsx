import { Component, Prop, h } from '@stencil/core';
import { formatDateString } from '../../utils/date-utils';
import { Element } from '@stencil/core';
import { getLocaleComponentStrings } from '../../utils/locale';

@Component({
  tag: 'varsom-water-measurement',
  styleUrl: 'varsom-water-measurement.css',
  shadow: true,
  assetsDirs: ['images'],
})
export class VarsomWaterMeasurement {
  private strings: any;
  @Prop() shortVersion: any;
  @Prop() Comment: any;
  @Prop() DtMeasurementTime: any;
  @Prop() WaterLevelValue: any;

  @Element() elem: HTMLElement;

  get waterMeasurementTimeFormatted(): string {
    return formatDateString(this.DtMeasurementTime, this.elem);
  }

  async componentWillLoad() {
    this.strings = await getLocaleComponentStrings(this.elem);
  }

  render() {
    return (
      <div>
        <varsom-label-small label={this.strings.Observations.WaterLevel2.WaterMeasurement}></varsom-label-small>
        {this.DtMeasurementTime ? <varsom-key-value _key={this.strings.Observations.LandslideObs.Time} _value={this.waterMeasurementTimeFormatted}></varsom-key-value> : ''}

        {this.WaterLevelValue ? <varsom-key-value _key={this.strings.Observations.LandslideObs.WaterLevelValue} _value={this.WaterLevelValue}></varsom-key-value> : ''}

        <br></br>
        {this.Comment ? <varsom-key-value _key={this.strings.Observations.WaterLevel2.Comment} _value={this.Comment}></varsom-key-value> : ''}
      </div>
    );
  }
}
