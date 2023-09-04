import { Component, Prop, h } from '@stencil/core';
import { generatePlotForIceThickness } from '../../utils/utils';
import { Attachment, IceThicknessLayer } from '../../models/observation-model';
import { getLocaleComponentStrings } from '../../utils/locale';

import { Element } from '@stencil/core';

@Component({
  tag: 'varsom-ice-thickness',
  styleUrl: 'varsom-ice-thickness.css',
  shadow: false,
  assetsDirs: ['images'],
})
export class VarsomIceThickness {

  private strings;
  @Prop() Comment: string;
  @Prop() shortVersion: string;
  @Prop() IceThicknessLayers: IceThicknessLayer[];
  @Prop() SnowDepth: number;
  @Prop() SlushSnow: number;
  @Prop() IceThicknessSum: number;
  @Prop() IceHeightBefore: number;
  @Prop() IceHeightAfter: number;
  @Prop() regId: number;
  @Prop() ObsLocationId: number;
  @Prop() DtObsTime: string;
  @Prop() LocationName: string;
  @Prop() HardCodedImg: string;
  @Prop() Attachments: Attachment[];

  element: HTMLElement;
  element2: HTMLElement;

  @Element() elem: HTMLElement;

  async componentWillLoad() {
    this.strings = await getLocaleComponentStrings(this.elem);
  }

  componentDidRender() {
    {
      generatePlotForIceThickness(
        this.IceThicknessLayers,
        this.regId,
        this.element,
        this.element2,
        this.IceThicknessSum,
        this.ObsLocationId,
        this.LocationName,
        this.SlushSnow,
        this.IceHeightBefore,
        this.IceHeightAfter,
        this.SnowDepth,
      );
    }
  }

  render() {
    return (
      <div class="container">
        <varsom-label label={this.strings.Observations.IceThickness.ObsName}></varsom-label>

        {this.IceThicknessLayers ? (
          <div>
            {this.IceThicknessLayers.map((el: IceThicknessLayer = {}) => {
              return (
                <varsom-ice-thickness-layer
                  shortVersion={this.shortVersion ? this.shortVersion : null}
                  Comment={el.Comment ? el.Comment : null}
                  IceLayerName={el.IceLayerName ? el.IceLayerName : null}
                  IceLayerThickness={el.IceLayerThickness ? el.IceLayerThickness : null}
                ></varsom-ice-thickness-layer>
              );
            })}{' '}
          </div>
        ) : (
          ''
        )}

        <div class="content">
          {this.SnowDepth ? <varsom-key-value _key={this.strings.Observations.IceThickness.SnowDepthBeforeDrilling} _value={this.SnowDepth + ' cm'}></varsom-key-value> : ''}

          {this.SlushSnow ? <varsom-key-value _key={this.strings.Observations.IceThickness.SlushSnowBeforeDrilling} _value={this.SlushSnow + ' cm'}></varsom-key-value> : ''}

          {this.IceHeightBefore && this.IceHeightBefore <= 0 ? (
            <varsom-key-value _key={this.strings.Observations.IceThickness.IceHeightBeforeInput} _value={this.IceHeightBefore * 100 * -1 + ' cm'}></varsom-key-value>
          ) : (
            ''
          )}

          {this.IceHeightAfter && this.IceHeightAfter > 0 ? (
            <varsom-key-value _key={this.strings.Observations.IceThickness.IceHeightBeforeInput} _value={this.IceHeightAfter * 100 + ' cm'}></varsom-key-value>
          ) : (
            ''
          )}

          {this.IceHeightAfter && this.IceHeightAfter === 0 ? (
            <varsom-key-value
              _key={this.IceHeightAfter ? this.IceHeightAfter : this.shortVersion ? null : 'er likt med isoverflaten'}
              _value={this.strings.Observations.IceThickness.IsEqualToIceSurface}
            ></varsom-key-value>
          ) : (
            ''
          )}

          {this.IceHeightAfter && this.IceHeightAfter < 0 ? (
            <varsom-key-value
              _key={this.strings.Observations.IceThickness.IceHeightBeforeInput}
              _value={this.IceHeightAfter * 100 * -1 + ' cm' + this.strings.Observations.IceThickness.LowerThanIceSurface}
            ></varsom-key-value>
          ) : (
            ''
          )}

          {this.IceThicknessSum ? <varsom-key-value _key={this.strings.Observations.IceThickness.Total} _value={this.IceThicknessSum}></varsom-key-value> : ''}

          <br></br>
          {this.Comment ? <varsom-key-value _key={this.strings.Observations.IceThickness.Comment} _value={this.Comment}></varsom-key-value> : ''}

          {this.HardCodedImg ? (
            <div>
              <img src={`src/assets/pictures/iceThicknessStorybookImg.png`}></img>
            </div>
          ) : (
            ''
          )}

          <div id={this.regId + '12345'} class="hoved" ref={el => (this.element = el as HTMLElement)}>
            <div id={this.regId + '98765'} class="icethicknessdiv" ref={el2 => (this.element2 = el2 as HTMLElement)}></div>
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
      </div>
    );
  }
}
