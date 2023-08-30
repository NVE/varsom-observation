import { Component, Prop, h } from '@stencil/core';
import { Attachment } from '../../models/observation-model';
import { getLocaleComponentStrings } from '../../utils/locale';

import { Element } from '@stencil/core';

@Component({
  tag: 'varsom-danger-obs',
  styleUrl: 'varsom-danger-obs.css',
  shadow: true,
  assetsDirs: ['images'],
})
export class VarsomDangerObs {
  private strings: any;
  @Prop() shortVersion: any;
  @Prop() GeoHazardName: any;
  @Prop() DangerSignName: any;
  @Prop() GeoHazardTID: any;
  @Prop() DangerSignTID: any;
  @Prop() Comment: any;
  @Prop() Attachments: Attachment[];

  @Element() elem: HTMLElement;

  async componentWillLoad() {
    this.strings = await getLocaleComponentStrings(this.elem);
  }

  render() {
    return (
      <div>
        <div class="parent">
          {this.DangerSignName ? (
            <varsom-key-value
              _key={this.strings && !this.shortVersion ? this.strings.Observations.DangerObs.DangerSignTName : this.shortVersion ? null : 'Type'}
              _value={this.DangerSignName}
            ></varsom-key-value>
          ) : (
            ''
          )}

          <br></br>
          {this.Comment ? (
            <varsom-key-value
              _key={this.strings && !this.shortVersion ? this.strings.Observations.DangerObs.Comment : this.shortVersion ? null : 'Kommentar'}
              _value={this.Comment}
            ></varsom-key-value>
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
