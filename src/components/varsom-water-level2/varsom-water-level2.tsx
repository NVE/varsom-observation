import { Component, Prop, h } from '@stencil/core';
import { Attachment, WaterLevelMeasurement } from '../../models/observation-model';
import { getLocaleComponentStrings } from '../../utils/locale';

import { Element } from '@stencil/core';

@Component({
  tag: 'varsom-water-level2',
  styleUrl: 'varsom-water-level2.css',
  shadow: true,
  assetsDirs: ['images'],
})
export class VarsomWaterLevel2 {
  private strings: any;
  @Prop() shortVersion: any;
  @Prop() Comment: any;
  @Prop() WaterAstrayName: any;
  @Prop() WaterLevelStateName: any;
  @Prop() ObservationTimingName: any;
  @Prop() MeasurementReferenceName: any;
  @Prop() WaterLevelMethodName: any;
  @Prop() MeasurementTypeName: any;
  @Prop() MarkingReferenceName: any;
  @Prop() MarkingTypeName: any;
  @Prop() WaterLevelMeasurement: WaterLevelMeasurement[];
  @Prop() WaterAstrayTID: any;
  @Prop() ObservationTimingTID: any;
  @Prop() MeasurementReferenceTID: any;
  @Prop() MeasurementTypeTID: any;
  @Prop() WaterLevelMethodTID: any;
  @Prop() MarkingReferenceTID: any;
  @Prop() WaterLevelStateTID: any;
  @Prop() MarkingTypeTID: any;
  @Prop() MeasuringToolDescription: any;
  @Prop() Attachments: Attachment[];

  @Element() elem: HTMLElement;

  async componentWillLoad() {
    this.strings = await getLocaleComponentStrings(this.elem);
  }

  render() {
    return (
      <div class="container">
        <varsom-label label={this.strings.Observations.WaterLevel.ObsName}></varsom-label>

        <div class="content">
          {this.WaterLevelStateName ? (
            <varsom-key-value _key={this.strings.Observations.WaterLevel2.WaterLevelStateTName} _value={this.WaterLevelStateName}></varsom-key-value>
          ) : (
            ''
          )}

          {this.WaterAstrayName ? <varsom-key-value _key={this.strings.Observations.WaterLevel2.WaterAstrayTName} _value={this.WaterAstrayName}></varsom-key-value> : ''}

          {this.ObservationTimingName ? (
            <varsom-key-value _key={this.strings.Observations.WaterLevel2.ObservationTimingTName} _value={this.ObservationTimingName}></varsom-key-value>
          ) : (
            ''
          )}

          {this.MeasurementTypeName ? (
            <varsom-key-value
              _key={this.strings.Observations.WaterLevel2.MeasurementTypeTName}
              _value={this.MeasurementTypeName + ', ' + (this.MeasuringToolDescription ? this.MeasuringToolDescription : '')}
            ></varsom-key-value>
          ) : (
            ''
          )}

          {this.MeasurementReferenceName ? (
            <varsom-key-value _key={this.strings.Observations.WaterLevel2.MeasuredRelativeTo} _value={this.MeasurementReferenceName}></varsom-key-value>
          ) : (
            ''
          )}

          {this.MeasurementReferenceTID ? (
            <varsom-key-value
              _key={this.strings.Observations.WaterLevel2.MeasurementReferenceTName}
              _value={this.MarkingReferenceName + this.strings.Observations.WaterLevel2.With + (this.MarkingTypeName ? this.MarkingTypeName : '')}
            ></varsom-key-value>
          ) : (
            ''
          )}

          <br></br>
          {this.Comment ? <varsom-key-value _key={this.strings.Observations.WaterLevel2.Comment} _value={this.Comment}></varsom-key-value> : ''}

          {this.WaterLevelMeasurement ? (
            <div>
              {this.WaterLevelMeasurement.map((el: WaterLevelMeasurement = {}) => {
                return (
                  <varsom-water-measurement
                    shortVersion={this.shortVersion ? this.shortVersion : null}
                    Comment={el.Comment}
                    DtMeasurementTime={el.DtMeasurementTime}
                    WaterLevelValue={el.WaterLevelValue}
                  ></varsom-water-measurement>
                );
              })}{' '}
            </div>
          ) : (
            ''
          )}
        </div>

        {this.Attachments && !this.shortVersion ? (
          <span class="attachments-container">
            {this.Attachments.map((el: Attachment = {}) => {
              return (
                <varsom-attachment
                  Photographer={el.Photographer ? el.Photographer : null}
                  Comment={el.Comment ? el.Comment : null}
                  Url={el.Url ? el.Url : null}
                  Copyright={el.Copyright ? el.Copyright : null}
                ></varsom-attachment>
              );
            })}{' '}
          </span>
        ) : (
          ''
        )}
      </div>
    );
  }
}
